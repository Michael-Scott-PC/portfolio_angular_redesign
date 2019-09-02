import { Proj } from './proj';

export const PROJECTS: Proj[] = [
    {
        id: '1',
        image: 'assets/images/iphoneX_full_snippet.JPG',
        label: 'Lift History (mobile view)',
        description:
        // tslint:disable-next-line: max-line-length
        'Lift history is a lift log project that I am currently working on. In order to generate a full calendar, I utilized: CSS grid for the layout, the TextCalendar and Calendar classes from Python\'s calendar module to create my own custom class, the date class from the datetime module and Django template interpolation.'
    },
    {
        id: '2',
        image: 'assets/images/iphoneX_dropdown_menu_snippet.JPG',
        label: 'Mobile Drop Down Menu',
        // tslint:disable-next-line: max-line-length
        description: 'For the mobile view drop down menu, I relied on Bootstrap for the functionality as I find it to be the quickest and easiest method for navigation bar toggling.'
    },
    {
        id: '3',
        image: 'assets/images/desktop_week_cal_view_2.JPG',
        label: 'Desktop Monthly View',
        // tslint:disable-next-line: max-line-length
        description: 'Currently, I have two tables - Exercises and Events - set up in PostgreSQL. I am manually adding events to the database for testing. This is an example of what someone\'s weekly programming might look like.'
    },
    {
      id: '4',
      image: 'assets/images/full_calendar_class_code.JPG',
      label: 'class FullCalendar Python Code Part 1',
      // tslint:disable-next-line: max-line-length
      description: 'My main goal was to keep the calendar creation logic separate from the templating. By storing the generated data in variables as lists and dictionaries I was able to pass these objects to the view for template interpolation. The next two images contain part 2 and part 3 of the full code for this class.'
    },
    {
      id: '5',
      image: 'assets/images/full_calendar_class_code_pt2.JPG',
      label: 'class FullCalendar Python Code Part 2',
      // tslint:disable-next-line: max-line-length
      description: 'Here is the continuation of part 1. As I would like to have abbreviated month and weekday names for the mobile view, I decided to create multiple lists to do so.'
    },
    {
      id: '6',
      image: 'assets/images/full_calendar_class_code_pt3.JPG',
      label: 'class FullCalendar Python Code Part 3',
      // tslint:disable-next-line: max-line-length
      description: 'This is the last of the class FullCalendar code. Once I got to the individual month view, where I was ready to display "events," I needed a way to ensure the date of the event matched the date on the calendar. By creating a dictionary with the full month name as the key with a list of all of its corresponding numerical days as the value, I was able to match events to the specific date on the calendar with conditionals and for loops in the Django template.'
    },
    {
      id: '7',
      image: 'assets/images/register_page.JPG',
      label: 'Account Registration',
      // tslint:disable-next-line: max-line-length
      description: 'Utilizing Django\'s built-in user support I was able to easily setup user registration, login, and logout capabilties. Next, I will be working on email verification to help minimize fake accounts.'
    },
    {
      id: '8',
      image: 'assets/images/login_page.JPG',
      label: 'Login Page',
      // tslint:disable-next-line: max-line-length
      description: 'The login and logout functionality is complete (the first desktop image actually shows my account logged in). Again, with Django\'s built-in user authentication system I was able to quickly get this functionality up and running.'
    },
];
