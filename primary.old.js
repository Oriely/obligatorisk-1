let realdate = "30.02.2019";

// check string length of "date" variable
function _dateLength(date) {
    return (date.length === 10);
}

// check if punctionation mark is in correct position in "date" variable
function _dots(date) {
    return (
        date.charAt(2) == '.' && date.charAt(5) == '.');
}

//check if current year in "date" variable is a leap year
function _leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function _yearReal(date) {
    return (date.split('.')[2].length == 4);
}

function _februaryCheck(date) {
    return (
        parseInt(date.split('.')[0]) <= 28 &&
        parseInt(date.split('.')[1]) === 2 ||

        parseInt(date.split('.')[0]) <= 29 &&
        parseInt(date.split('.')[1]) === 2 &&
        _leapYear(parseInt(date.split('.')[2])) === true
    );
}

function _checkMonths(date) {
    return (
        _februaryCheck(date) == true ||
        parseInt(date.split('.')[0]) <= 30 &&
        parseInt(date.split('.')[1]) === 4 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 1 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 3 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 5 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 6 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 7 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 8 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 9 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 10 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 11 ||

        parseInt(date.split('.')[0]) <= 31 &&
        parseInt(date.split('.')[1]) === 12
    );
}

function _monthsReal(date) {
    return (parseInt(date.split('.')[1]) <= 12);
}

// do multpiple checks to check if the whole string of the date variable is
// a "correct" date 
function _isDateValid(date) {
    return (_dateLength(date) && _dots(date) && _yearReal(date) && _checkMonths(date) && _monthsReal(date));
}


QUnit.module('add', function() {
    QUnit.test('date does not have length of 10', function(assert) {
        let actual = "11.12.199";
        let expected = false;
        assert.equal(_isDateValid(actual), expected);

    });
    QUnit.test('punctionation is not in correct position', function(assert) {
        let actual = "11.121.996";
        let expected = false;
        assert.equal(_isDateValid(actual), expected);

    });
    QUnit.test('year does not have a length of 4 ', function(assert) {
        let actual = "11.12.199";
        let expected = false;
        assert.equal(_isDateValid(actual), expected);

    });
    QUnit.test('month doesn not have two integers', function(assert) {
        let actual = "11.12.1996";
        let expected = true;
        assert.equal(_isDateValid(actual), expected);

    });
    QUnit.test('month outside of 1-12 ', function(assert) {
        let actual = "11.15.1996";
        let expected = false;
        assert.equal(_isDateValid(actual), expected);

    });
    QUnit.test('if day is higher than 31 function', function(assert) {
        let actual = "32.12.1996";
        let expected = false;
        assert.equal(_isDateValid(actual), expected);

    });
    QUnit.test('day is 31st for a month without 31 days.', function(assert) {
        let actual = "31.04.1996"
        let expected = false;
        assert.equal(_isDateValid(actual), expected);

    });
    QUnit.test('day is 30th and month is february', function(assert) {
        let actual = "30.02.2020"
        let expected = false;
        assert.equal(_isDateValid(actual), expected);

    });
    QUnit.test('day is 29th, its february and its not a leap year', function(assert) {
        let actual = "29.02.2019"
        let expected = false;
        assert.equal(_isDateValid(actual), expected);

    });
    QUnit.test('If its leap year and its february 29th', function(assert) {
        let actual = "29.02.2020"
        let expected = true;
        assert.equal(_isDateValid(actual), expected);

    });


});
