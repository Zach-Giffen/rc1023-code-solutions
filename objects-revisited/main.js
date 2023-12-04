const business = {
  opens: '9:00AM',
  closes: '5:00PM',
  totalEmployees: 5,
  daysOpen: ['Mon', 'Wed', 'Fri'],
  employees: {
    Frank: {
      position: 'Owner',
      daysOfWeekWorking: ['Fri'],
    },
    Dee: {
      position: 'waitress',
      daysOfWeekWorking: ['Fri'],
    },
    Dennis: {
      position: 'bartender',
      daysOfWeekWorking: ['Mon', 'Wed'],
    },
    Mac: {
      position: 'bouncer',
      daysOfWeekWorking: ['Mon', 'Wed'],
    },
    Charlie: {
      position: 'janitor',
      daysOfWeekWorking: ['Mon', 'Wed', 'Fri'],
    },
  },
};

function addWeekends() {
  for (const employee in business.employees) {
    business.employees[employee].daysOfWeekWorking.push('Sat', 'Sun');
  }
}

function addEmployees() {
  function employeeAPI(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        const responseData = xhr.response;
        callback(responseData);
      } else {
        console.error('Request failed with status:', xhr.status);
      }
    });

    xhr.addEventListener('error', function () {
      console.error('Request failed');
    });

    xhr.send();
  }
  function randomDays() {
    const randomInt = Math.floor(Math.random() * 5) + 1;
    let daysOfWeekWorking = [];
    if (randomInt === 1) {
      daysOfWeekWorking = ['Mon'];
    } else if (randomInt === 2) {
      daysOfWeekWorking = ['Mon', 'Wed'];
    } else if (randomInt === 3) {
      daysOfWeekWorking = ['Mon', 'Fri'];
    } else if (randomInt === 4) {
      daysOfWeekWorking = ['Wed', 'Fri'];
    } else {
      daysOfWeekWorking = ['Mon', 'Wed', 'Fri'];
    }
    daysOfWeekWorking.push('Sat', 'Sun');
    return daysOfWeekWorking;
  }

  function fullTime(daysOfWeekWorking) {
    if (daysOfWeekWorking.length >= 5) {
      return true;
    } else {
      return false;
    }
  }

  employeeAPI(function (data) {
    for (let i = 0; i < 4; i++) {
      const employee = data[i];
      const days = randomDays();
      business.employees[employee.name] = {
        position: 'barista',
        daysOfWeekWorking: days,
        fullTime: fullTime(days),
      };
    }
    business.totalEmployees = Object.keys(business.employees).length;
  });
}

addWeekends();
addEmployees();

console.log(business);
