#References

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

https://angular.io/guide/aot-compiler

# Revised

Add the following to package.json

    "@webcomponents/custom-elements": "^1.1.1",
    "@webcomponents/webcomponentsjs": "^2.0.0",

Add the following to angular.json (if you want to run in standalone mode).  During the build, this will bundle the included javascript files in a scripts.js file within the dist folder.

        "build": {
            ....
            ....
            "scripts": [
              "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
              ....
              ....

Then, add the scripts.js file to ./src/index.html, i.e. 

	<body>
	   <script type="text/javascript" src="scripts.js"></script>
	   <app-root></app-root>
	</body>

Install the angular cli:
              
	yarn global add @angular/cli

Build the project:

	npm run build 
	
Which under the covers calls:
	
	ng build

Run it:

	npm run serve
	
Which under the covers calls:	
	
	ng serve
	
	
## Optional Creation of a Local Package Manager	
	
https://www.npmjs.com/package/sinopia	
	
	yarn global add sinopia

Add the registry to your npm config, i.e.

	npm config edit

Then add this entry:

	@local:registry=http://localhost:4873	


## Publishing a Artifact to the Respository

https://docs.npmjs.com/cli/publish

npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>] [--otp otpcode]


# Angular 6 Elements To Create MicroFront End Application

Default Angular CLI build

* `npm run build` build the header component
* `node server` to run a standalone header application

Build and publish reusable module like any other Angular module

* `./build.sh` to create reusable package
* `npm publish` publish the package to npm

Building MicroFront End Application using Angular Elements/Web Components
Read the complete walkthrough in the article: 
