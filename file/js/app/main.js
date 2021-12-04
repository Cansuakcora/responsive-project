
//! ----- TABLE SHOW/HIDE ----- //!
let btnSession1 = document.querySelector('#btn-session-1');
let btnSession2 = document.querySelector('#btn-session-2');

btnSession1.addEventListener('click', function () {
    // Button session class

    btnSession2.classList.remove('btn-speaker-date--active');
    btnSession1.classList.add('btn-speaker-date--active');

    // Table scheuld class
    document.querySelector('#schedule-table-2').classList.remove('show');
    document.querySelector('#schedule-table-2').classList.add('schedule__table-hide');

    document.querySelector('#schedule-table-1').classList.remove('schedule__table-hide');
    document.querySelector('#schedule-table-1').classList.add('show');
});

btnSession2.addEventListener('click', function () {
    // Button session class
    btnSession1.classList.remove('btn-speaker-date--active');
    btnSession2.classList.add('btn-speaker-date--active');

    // Table scheuld class
    document.querySelector('#schedule-table-1').classList.remove('show');
    document.querySelector('#schedule-table-1').classList.add('schedule__table-hide');

    document.querySelector('#schedule-table-2').classList.remove('schedule__table-hide');
    document.querySelector('#schedule-table-2').classList.add('show');
});


//! ----- TABLE SHOW/HIDE ----- //!

//! ----- SPEAKERS SHOW/HIDE ----- //!
let btnSpeakersList1 = document.querySelector('#btn-speakers-list-1');
let btnSpeakersList2 = document.querySelector('#btn-speakers-list-2');
let speakersGroup1 = document.querySelector('#speakers-group-1');
let speakersGroup2 = document.querySelector('#speakers-group-2');

btnSpeakersList1.addEventListener('click', function () {
    // Button class
    btnSpeakersList2.classList.add('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList2.classList.remove('btn-speaker-date--active');

    btnSpeakersList1.classList.remove('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList1.classList.add('btn-speaker-date--active');

    // Speaker group
    speakersGroup2.classList.add('speakers__hide');
    speakersGroup2.classList.remove('speakers__show');

    setTimeout(function () {
        speakersGroup2.classList.add('d-none');
    }, 500);

    speakersGroup1.classList.remove('speakers__hide');
    speakersGroup1.classList.add('speakers__show');

    setTimeout(function () {
        speakersGroup1.classList.remove('d-none');
    }, 500);
});

btnSpeakersList2.addEventListener('click', function () {
    // Button class
    btnSpeakersList1.classList.add('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList1.classList.remove('btn-speaker-date--active');

    btnSpeakersList2.classList.remove('bg-white', 'color-navy-blue', 'border-btn-navyblue');
    btnSpeakersList2.classList.add('btn-speaker-date--active');

    // Speaker group
    speakersGroup1.classList.remove('speakers__show');
    speakersGroup1.classList.add('speakers__hide');

    setTimeout(function () {
        speakersGroup1.classList.add('d-none');
    }, 500);

    speakersGroup2.classList.remove('speakers__hide');
    speakersGroup2.classList.add('speakers__show');

    setTimeout(function () {
        speakersGroup2.classList.remove('d-none');
    }, 500);
});


//! ----- SPEAKERS SHOW/HIDE ----- //!


//! ----- TEASER SHOW-HİDE ----- //!
$('#btn-video-list-1').click(function(){
    $('#teaser-video-2').hide('slow')
    $('#teaser-video-1').show('slow');
    $('#btn-video-list-2').removeClass('btn-speaker-date--active');
    $('#btn-video-list-1').addClass('btn-speaker-date--active');
});
$('#btn-video-list-2').click(function(){
    $('#teaser-video-1').hide('slow')
    $('#teaser-video-2').show('slow');
    $('#btn-video-list-1').removeClass('btn-speaker-date--active');
    $('#btn-video-list-2').addClass('btn-speaker-date--active');
});

//! ----- TEASER SHOW-HİDE ----- //!


//! BROWSER CHECK //!
window.onload = function () {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        document.querySelector(".footer").classList.remove("flex-row-center");
    }
}
//! BROWSER CHECK //!