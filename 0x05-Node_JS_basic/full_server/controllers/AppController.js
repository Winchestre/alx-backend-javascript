/**
 * Contains the miscellaneous route handlers.
 * @author Bassey Solomon <https://github.com/Winchestre>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;
