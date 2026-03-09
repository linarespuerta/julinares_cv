export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Main heading (e.g., Medicina)',
        },
        {
            name: 'italicTitle',
            title: 'Italic Title',
            type: 'string',
            description: 'Italic emphasis (e.g., con Pulso.)',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'Subheading (e.g., Ciencia rigurosa. Impacto humano.)',
        },
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            description: 'Name displayed in hero (e.g., Dr. Juliana Linares Puerta)',
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Upload your profile photo.',
        },
    ],
}
