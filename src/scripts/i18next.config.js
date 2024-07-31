import { mkdir, rm, writeFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import { globby } from 'globby';
import { readFile } from 'fs/promises';

/** Project root dir */
const ROOT_DIR = resolve('.');

/** Directory for locales */
const LOCALES_DIR = resolve(ROOT_DIR, 'public', 'locales');

/** Supported languages */
const LANGUAGES = ['en'];

/**
 * Merge locale files into a single translation.json file for each language
 * @type {() => Promise<void>}
 */
const mergeLocaleFiles = async () => {
  await rm(LOCALES_DIR, { recursive: true, force: true });

  await Promise.all(
    LANGUAGES.map(async (language) => {
      // Create directory
      const languageDir = resolve(LOCALES_DIR, language);
      await mkdir(languageDir, { recursive: true });

      // Get all locale files for the given language
      const files = await globby(
        resolve(ROOT_DIR, 'src', `**/*.translation.${language}.json`),
      );

      console.info(`Found files for language ${language}:`, files.length);

      // Initialize an empty object to store merged translations
      const mergedTranslations = {};

      // Read each file and merge its content
      await Promise.all(
        files.map(async (file) => {
          try {
            const componentName = basename(
              file,
              `.translation.${language}.json`,
            );
            const fileContent = await readFile(file, 'utf-8');
            const jsonContent = JSON.parse(fileContent);

            // console.info(`Content of ${file}:`, jsonContent);

            mergedTranslations[componentName] = jsonContent;
          } catch (error) {
            console.error(`Error reading or parsing file ${file}:`, error);
          }
        }),
      );

      // Write merged translations to translation.json
      const outputPath = resolve(languageDir, 'translation.json');
      await writeFile(outputPath, JSON.stringify(mergedTranslations, null, 2));
      console.info(`Merged translations written to: ${outputPath}`);
    }),
  );
};

(async () => mergeLocaleFiles())();
