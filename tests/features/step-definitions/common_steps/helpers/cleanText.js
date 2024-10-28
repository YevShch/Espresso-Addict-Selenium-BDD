export default function cleanText ( text ) {
  if ( typeof text !== 'string' ) {
    throw new TypeError( `Expected a string, but received ${ typeof text }` );
  }

  // Replace all quotes with single quotes and remove invisible characters
  return text
    .replace( /["']/g, "'" )           // Replace double quotes with single quotes
    .replace( /[^\x20-\x7E]/g, '' )    // Remove invisible characters
    .replace( /\s+/g, ' ' )            // Replace multiple spaces with a single space
    .trim();                         // Trim spaces from the beginning and end
}
