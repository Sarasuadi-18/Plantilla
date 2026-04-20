// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mi Documentación',
			locales: {
				root: {
				label: 'Español',
				lang: 'es',
				},
			},
			logo:{
				src: './src/assets/www.png',

				
			},
			favicon: 'refugio-de-animales.png',
			customCss: [
			'./src/styles/custom.css',
			],
			social: [
					{
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/withastro/starlight' 
					},
					{ 
					icon: 'facebook', 
					label: 'Facebook', 
					href: 'https://facebook.com/tu-cuenta' 
					},
					{ 
					icon: 'instagram',
					label: 'Instagram', 
					href: 'https://instagram.com/tu-cuenta' 
					},
					{ 
					icon: 'tiktok', 
					label: 'Tiktok', 
					href: 'https://tiktok.com/tu-cuenta' 
					}
					],
			sidebar: [
				{
					label: 'Guias',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '🚀 Ejemplo de guia', slug: 'guides/example' },
						{ label: '🛠️ Prueba', slug: 'guides/prueba'  },
						{label: 'Prueba Dos', slug: 'guides/prueba-dos'},
						{label: 'Prueba Tres', slug: 'guides/prueba-tres'},
					],

				},
				{
					label: 'Referencia',
					autogenerate: { directory: 'referencia' },
				},
				{
					label: 'Información',
					autogenerate: { directory: 'informacion' },
				},
			],
		}),
	],
});
