export type ContactLink = {
    type: 'email' | 'github' | 'linkedin';
    href: string;
};

export const contactLinks: ContactLink[] = [
    {
        type: 'email',
        href: 'mailto:mehransoufi1@gmail.com',
    },
    {
        type: 'github',
        href: 'https://github.com/Mehran-soufi',
    },
    {
        type: 'linkedin',
        href: 'https://www.linkedin.com/in/mehran-soufi/',
    },
];