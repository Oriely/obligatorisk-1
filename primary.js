function _dateLength(date) { return (date.length === 10); }

function _dots(date) { return (date.charAt(2) == '.' && date.charAt(5) == '.'); }

function _leapYear(year) { return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0); }

function _yearReal(date) { return (date.split('.')[2].length == 4); }

function _years(date) { return (date.split('.')[2].length === 4 && date.split('.')[2] >= '0000' && date.split('.')[2] <= '9999'); }

function _monthReal(date) { return (date.split('.')[1].length === 2 && date.split('.')[1] >= '01' && date.split('.')[1] <= '12'); }

function _days(date) {
    let day = date.split('.')[0];
    let mth = date.split('.')[1];
    let yr = date.split('.')[2];
    return (
        day <= '28' && mth <= '12' ||
        day <= '31' && mth == '01' ||
        day <= '31' && mth == '03' ||
        day <= '31' && mth >= '05' && mth <= '12' ||
        day <= '30' && mth == '04' ||
        day <= '28' && mth == '02' ||
        day <= '29' && mth == '02' && _leapYear(yr) == true
    );
}

// do multpiple checks to check if the whole string of the date variable is
// a "correct" date 
function _isDateValid(date) {
    return (_dateLength(date) && _dots(date) && _yearReal(date) && _monthReal(date) && _days(date));
}

QUnit.module('add', function() {
    QUnit.test('date does not have length of 10', function(assert) {
        let actual = _isDateValid("11.12.199");
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('punctionation is not in correct position', function(assert) {
        let actual = _isDateValid("11.121.996");
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('year does not have a length of 4 ', function(assert) {
        let actual = _isDateValid("11.12.199");
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('month doesn not have two integers', function(assert) {
        let actual = _isDateValid("11.1.1996");
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('month is not 2 numbers', function(assert) {
        let actual = _isDateValid("11.2.1996");
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('month outside of 1-12 ', function(assert) {
        let actual = _isDateValid("11.15.1996");
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('if day is higher than 31 function', function(assert) {
        let actual = _isDateValid("32.12.1996");
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('day is 31st for a month without 31 days.', function(assert) {
        let actual = _isDateValid("31.04.1996")
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('day is 30th and month is february', function(assert) {
        let actual = _isDateValid("30.02.2020")
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('day is 29th, its february and its not a leap year', function(assert) {
        let actual = _isDateValid("29.02.2019");
        let expected = false;
        assert.equal(actual, expected);

    });
    QUnit.test('If its leap year and its february 29th', function(assert) {
        let actual = _isDateValid("29.02.2020");
        let expected = true;
        assert.equal(actual, expected);

    });


});