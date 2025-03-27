# People Management SPA (Angular 7/8)

## Overview
This is a Single Page Application (SPA) built with Angular 7/8 to manage a list of people. The application provides the following views:

1. **List all people** - Display a list of all people.
2. **Edit a person** - Modify details of a selected person.
3. **Delete a person** - Remove a person from the list.

## Project Structure
```
app/
  ├── components/
  │   ├── delete-person/
  │   ├── edit-person/
  │   ├── people-list/
  ├── models/
  │   ├── person.model.ts
  ├── services/
  │   ├── people.service.ts
  ├── global_styles.css
  ├── index.html
  ├── main.ts
```

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 10.x)
- Angular CLI (>= 7.x)

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd The_real_doctors_angular_assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm run start
   ```
   This will start the development server and open the application in the browser.

## API Endpoints
Use the following REST API URLs to fetch and manipulate data:

- **Get all people:** `GET /api/people`
- **Get person by ID:** `GET /api/people/:id`
- **Update person:** `PUT /api/people/:id`
- **Delete person:** `DELETE /api/people/:id`

## Components & Services
- **PeopleListComponent:** Displays a list of people.
- **EditPersonComponent:** Handles editing of a selected person.
- **DeletePersonComponent:** Handles deletion of a person.
- **PeopleService:** Provides methods to interact with the REST API.

## Model
```typescript
export interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
}
```

## Styling
Global styles are maintained in `global_styles.css`.


## Some images

![Screenshot from 2025-03-27 18-01-10](https://github.com/user-attachments/assets/fa0995e1-3bca-4aa3-bb4f-ba47a9097aa7)

![Screenshot from 2025-03-27 18-01-14](https://github.com/user-attachments/assets/40a3d8ba-c8c4-43c3-9488-4b80a4d6a56a)


![Screenshot from 2025-03-27 18-01-20](https://github.com/user-attachments/assets/fb14c0f4-9a7c-4913-9d24-532f468aad07)





