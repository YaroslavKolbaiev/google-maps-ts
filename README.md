A community fork of Faker was made to save the project:

https://github.com/faker-js/faker

To use this library, you can install it by running:

npm install @faker-js/faker

You'll then need to update all of your imports:

import { faker } from "@faker-js/faker";

As of their v6 release, TS support is now native and does not require installing the @types declarations.

https://github.com/faker-js/faker#typescript-support

key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU&callback=Function.prototype

npm install @types/google.maps

Also, you will still see a TS error in your code editor:

Cannot find name 'google'.ts(2304)

As the very first line in the index.ts file, you will need to add a triple slash directive:
