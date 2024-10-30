import { driver } from '../../support/world.js';
import clickButton from './clickButton.js'

export default async function startLocation ( location ) {
  console.log( `Starting location: ${ location }` );
  try {
    await driver.get( 'http://localhost:3000' ); 
    console.log( `Loading game at: http://localhost:3000` );

    switch ( location ) {
      case 'outside the Cloud Forest Cafe':
        break;

      case 'in the Cloud Forest Cafe':
        await clickButton( 'Enter the cafe' );
        break;


      case 'on an empty street':
        await clickButton( 'Go north' );
        break;

      case 'in a crowded bar':
        await clickButton( 'Go north' );
        await clickButton( 'Go east' );
        break;

      
      case 'in the contry-side':
        await clickButton( 'Go south' );
       
        break;

      case 'A guitarist and sax player':
        await clickButton( 'Go south' );
        await clickButton( 'Go west' );
        break;

      default:
        throw new Error( `Unknown location: ${ location }` );
    }
  } catch ( error ) {
    console.error( `Error while starting location ${ location }: ${ error.message }` );
    throw error; 
  }
}
