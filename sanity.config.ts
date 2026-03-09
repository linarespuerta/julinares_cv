import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
    name: 'default',
    title: 'Juliana CV Admin',

    projectId: 'YOUR_PROJECT_ID', // Replaced by user later
    dataset: 'production',

    basePath: '/admin',

    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
})
