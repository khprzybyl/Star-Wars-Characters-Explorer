
# Star Wars Characters Explorer

This project is a React-based web application that uses the Star Wars API (SWAPI) to display a list of characters from the Star Wars universe. It is bundled with Webpack and provides an interactive UI to explore various Star Wars characters.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
- Search functionality to find characters by name.
- Pagination to browse characters data effectively.
- Detailed view of planet information on user interaction.
- Responsive design for an optimal experience on various devices.

## Installation

To run this project, follow these steps:

1. Navigate to the project directory:

cd [project-directory]

2. Install dependencies:

### `npm install`

3. Start the application:

### `npm run start`

The application will run on `http://localhost:3000`.

3. Test the application:

### `npm test`



As Yoda would say, 'Enjoy it, you should!



## Study Case

### Planning and Stack Decision
The application was designed with a focus on performance and user experience. The tech stack was chosen to balance ease of development with efficient data handling:
- **React** for its component-based architecture and efficient update/render cycle.
- **React Query** for managing server state, caching, and automatic data synchronization.
- **Context API** for state management across components without prop drilling.
- **QS library** for query string parsing, enabling dynamic search and pagination.

### Approach for Fetching Data
The data fetching strategy was two-fold:
1. **Server-Side Search**: Utilizing SWAPI's built-in search to filter characters by name. This approach offloads filtering logic to the server, reducing the amount of data transferred over the network.
2. **Client-Side Sorting**: Due to SWAPI's limitations on ordering, client-side sorting was implemented to allow users to sort characters based on various attributes like name, height, and planet name etc.

### Challenges and Resolutions

#### Sorting Mechanism
Our application's sorting mechanism presents several notable features and challenges:
1. **Sorting by Planet Name**: This required fetching detailed planet information for each character, a process that involved careful handling of data.
2. **Client-Side Sorting**: To avoid overwhelming the API with requests and to ensure a smooth user experience, sorting was implemented on the client-side, using only the data already visible to the user.

#### Potential Improvements and Current Limitations
- **Server-Side Sorting**: Ideally, sorting should be handled on the server side. If the application were to be further developed, I would propose coordinating with the backend team to enhance this functionality. 
- **Whole Data Client-Side Sorting**: Another approach could be to perform the sorting on the frontend using all the data retrieved, possibly through a web worker. While this method may not be optimal for performance, it remains a viable solution for accomplishing the task.
- **Data Stability and Scalability**: Considering that the Star Wars universe and the API are relatively static, the current setup, including the use of caching to implement sorting and maintain data stability, served as a quick fix. However, this is not a scalable solution. A more long-term approach would involve collaborating with the backend team to refine the ordering parameter.
- **Validation and Data Handling**: Additional improvements could include enhancing validation for fetching character data and managing instances where data is marked as "unknown."
- **Improvements**: Additional improvements could include using TanStack table, and libraries for UI components and CSS framework.

#### Development Process
Throughout the development process, I encountered challenges such as handling asynchronous data fetching and dependent queries. 
By utilizing React Query's dependent queries feature, we were able to streamline the process, ensuring that planet details were 
fetched only after the successful retrieval of character data.


May the Force be with you! And may the positive energy of the Force influence your decision.



Created by 

Katarzyna Przybył 
khprzybyl@gmail.com
