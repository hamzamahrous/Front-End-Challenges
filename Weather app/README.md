# Weather App

This is a simple and elegant weather application built with Angular. It provides real-time weather information for any location worldwide. Users can view the current weather, as well as hourly and daily forecasts.

## Website Description

The application features a clean and modern user interface. The main view displays the current weather conditions for the user's selected location, including temperature, humidity, wind speed, and more. It also presents a 7-day forecast and an hourly forecast for the next 24 hours. A powerful search functionality allows users to easily find weather information for different cities.

## Features

-   **Current Weather:** Get up-to-the-minute weather data.
-   **7-Day Forecast:** Plan ahead with a 5-day weather forecast.
-   **24-Hour Forecast:** See an hour-by-hour forecast for the next 24 hours.
-   **Search:** Find weather information for any city in the world.
-   **Unit Conversion:** Switch between Metric and Imperial units.
-   **Responsive Design:** The application is fully responsive and works on all devices.

## Technologies Used

This project is built with modern web technologies and leverages the following Angular features:

-   **Angular CLI:** For project generation, code scaffolding, and build/test automation.
-   **Components:** The UI is built using a modular, component-based architecture. This includes components for search, current weather, hourly forecast, and daily forecast.
-   **Services:** Services are used to manage application-wide concerns such as fetching weather data from an API and handling unit conversions.
-   **Models:** TypeScript interfaces are used to define data structures for `Location` and `Weather` data.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
