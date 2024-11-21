import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'digiexpo',

  projectId: 'sszv4zrt',
  dataset: 'digiexpo',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
