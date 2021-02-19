#!/usr/bin/env node
const rollup = require( "rollup" );
const path = require( "path" );
const resolve = require( "@rollup/plugin-node-resolve" ).default;
const babel = require( "@rollup/plugin-babel" ).default;

const currentWorkingPath = process.cwd();
const { src, name } = require( path.join( currentWorkingPath, "package.json" ) );

const inputPath = path.join( currentWorkingPath, src );

// Get package name without scope.
const fileName = name.replace( "@wpmudev/", "" );

// Input options.
const inputOptions = {
	input: inputPath,
	external: [
		"react"
	],
	plugins: [
		resolve(),
		babel({
			presets: [
				"@babel/preset-env",
				"@babel/preset-react"
			],
			babelHelpers: "bundled",
			exclude: 'node_modules/**'
		})
	]
};

// Output options.
const outputOptions = [
	{
		file: `dist/${fileName}.cjs.js`,
		format: "cjs"
	},
	{
		file: `dist/${fileName}.esm.js`,
		format: "esm"
	}
];

async function build() {
	// Create bundle.
	const bundle = await rollup.rollup( inputOptions );

	// Loop through the options and write individual bundles.
	outputOptions.forEach( async ( options ) => {
		await bundle.write( options );
	});

	console.log( "📦 Package " + name + " compiled." );

}

build();
