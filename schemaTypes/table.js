import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        defineType({
          type: 'object',
          name: 'row',
          fields: [
            defineField({
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [{ type: 'string' }]
            })
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      rows: 'rows'
    },
    prepare({ rows }) {
      return {
        title: `Table with ${rows?.length || 0} rows`
      };
    }
  }
});
