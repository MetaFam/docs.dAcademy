// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'dAcademy Docs',
			social: {
				github: 'https://github.com/MetaFam/dAcademy',
			},
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'History of dAcademy', slug: 'overview/history' },
					],
				},
				{
					label: 'Using dAcademy',
					items: [
						{ label: 'Join as an Org', slug: 'use/join' },
						{ label: 'Uploading Playbooks', slug: 'use/uploading' },
						{ label: 'Chapter Submissions', slug: 'use/submissions' },
						{ label: 'User Profiles', slug: 'use/userprofiles' },
					]
				},
				{
					label: 'Stack',
					autogenerate: { directory: 'stack' },
				},
			],
		}),
	],
});
