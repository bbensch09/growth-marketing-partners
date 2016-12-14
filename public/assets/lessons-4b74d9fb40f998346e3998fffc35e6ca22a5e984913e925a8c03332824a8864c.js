var LESSON={init:function(){LESSON._date=$("#datepicker"),LESSON._slot=$("#lesson_lesson_time_slot"),LESSON._duration=$("#lesson_duration"),LESSON._durations={one:$("#lesson_duration option:eq(1)"),two:$("#lesson_duration option:eq(2)"),three:$("#lesson_duration option:eq(3)"),six:$("#lesson_duration option:eq(4)")},LESSON._startTime=$("#timepicker"),LESSON._actualStartTime=$("#start-timepicker"),LESSON._actualEndTime=$("#end-timepicker"),LESSON.setDatepicker(),LESSON.toggleDuration(),LESSON._slot.change(LESSON.toggleDuration),LESSON.toggleStartTime(),LESSON._duration.change(LESSON.toggleStartTime),LESSON.setTimepickers(),LESSON._slot.change(LESSON.updateRequesterTimepicker),LESSON._duration.change(LESSON.updateRequesterTimepicker),LESSON._actualStartTime.change(LESSON.updateInstructorTimepickers)},setDatepicker:function(){LESSON._date.datepicker({minDate:"2016-12-16",dateFormat:"yy-mm-dd"})},toggleDuration:function(){LESSON.slotValid()?(LESSON.enable(LESSON._duration),LESSON.configureDuration()):(LESSON.clearAndDisable(LESSON._duration),LESSON.clearAndDisable(LESSON._startTime))},toggleStartTime:function(){LESSON.slotValid()&&LESSON.durationValid()?LESSON.enable(LESSON._startTime):LESSON.clearAndDisable(LESSON._startTime)},setTimepickers:function(){LESSON._startTime.timepicker({step:30}),LESSON.configureRequesterTimepicker(),LESSON.configureConfirmTimepickers()},updateRequesterTimepicker:function(){LESSON.configureRequesterTimepicker(!0)},updateInstructorTimepickers:function(){LESSON.configureConfirmTimepickers()},slotValid:function(){var e=LESSON._slot.val();return"Morning"===e||"Afternoon"===e||"Full Day"===e},durationValid:function(){var e=LESSON._duration.val();return"2"===e||"3"===e||"6"===e},enable:function(e){e.prop("disabled",!1)},disable:function(e){e.prop("disabled",!0)},setValue:function(e,t){e.val(t)},clearAndDisable:function(e){LESSON.setValue(e,null),LESSON.disable(e)},configureDuration:function(){var e=LESSON._slot.val(),t=LESSON._duration.val();LESSON.setDurationValue(e,t),LESSON.setDurationOptions(e)},setDurationValue:function(e,t){"Full Day"===e?LESSON.setValue(LESSON._duration,6):"6"===t&&LESSON.setValue(LESSON._duration,null)},setDurationOptions:function(e){"Full Day"===e?LESSON.configureDurationOptions("disable","enable"):LESSON.configureDurationOptions("enable","disable")},configureDurationOptions:function(e,t){LESSON[e](LESSON._durations.two),LESSON[e](LESSON._durations.three),LESSON[t](LESSON._durations.six)},configureRequesterTimepicker:function(e){var t="undefined"!=typeof e&&e;LESSON.slotValid()&&LESSON.durationValid()&&(LESSON.setMinAndMaxTime(),LESSON.checkStartTime(t),LESSON.updateMinAndMaxTime())},setMinAndMaxTime:function(){var e=LESSON._slot.val(),t=LESSON._duration.val();LESSON.setMinTime(e),LESSON.setMaxTime(e,t)},setMinTime:function(e){LESSON.minTime="Afternoon"===e?"1:00pm":"9:00am"},setMaxTime:function(e,t){var n={"Morning|2":"10:30am","Morning|3":"9:30am","Afternoon|2":"2:00pm","Afternoon|3":"1:00pm","Full Day|6":"9:30am"};LESSON.maxTime=n[e+"|"+t]},checkStartTime:function(e){LESSON.minTime===LESSON.maxTime?(e&&LESSON.setValue(LESSON._startTime,LESSON.minTime),LESSON.maxTime="1:01pm"):e&&LESSON._startTime.val(null)},updateMinAndMaxTime:function(){LESSON._startTime.timepicker("option","minTime",LESSON.minTime),LESSON._startTime.timepicker("option","maxTime",LESSON.maxTime)},configureConfirmTimepickers:function(){LESSON.initializeConfirmTimepickers(),LESSON.updateActualEndTimepicker()},initializeConfirmTimepickers:function(){LESSON._actualStartTime.timepicker({minTime:"9:00am",maxTime:"1:00pm",step:60}),LESSON._actualEndTime.timepicker({minTime:"10:00am",maxTime:"4:00pm",step:60}),LESSON.disable(LESSON._actualEndTime)},updateActualEndTimepicker:function(){var e=LESSON._actualStartTime.val();null!==e&&(LESSON._actualEndTime.timepicker("option","minTime",e),LESSON.enable(LESSON._actualEndTime))}};$(function(){LESSON.init()}),$(window).bind("page:change",function(){LESSON.init()}),$(document).ready(function(){$(".remove-student").length<=1&&($("#add-student-button").click(),console.log("loaded first student.")),$("#preSeasonModalButton").length>0&&($("#preSeasonModalButton").click(),console.log("triggered preSeasonModal")),calculatePriceListener(),toggleElementListener(),abilityLevelWarningListener()});var abilityLevelWarningListener=function(){$("#add-student-button").click(function(){$("#ability-level-warning").removeClass("hidden"),console.log("removed hidden status of ability warning line.")})},calculatePriceListener=function(){var e=75;$(".lesson-length-input").change(function(t){t.preventDefault(),console.log("listening for changes to lesson_length");var n=$(".lesson-length-input").val();console.log("the input value is:"+n);var i=n*e;console.log("the lesson price is:"+i),$("#donation-amount").html(i)}),$(".lesson-slot-input").change(function(){if(console.log("detected slot change."),"Full Day"==$(".lesson-slot-input").val()){console.log("the lesson slot is now full day.");var t=6*e;console.log("lesson price is: "+t),$("#donation-amount").html(t)}})},calculateTotalListener=function(){console.log("totalListener is listening..."),$("tip-amount-input").change(function(e){e.preventDefault(),console.log("listening for changes to the tip");var t=$("tip-amount-input").val(),n=$("base-amount-input").val();console.log("the tip amount is:"+t);var i=n+t;console.log("the lesson price is:"+i),$("#transaction_final_amount").html(i)})},toggleElementListener=function(){$("#toggle-completed-lessons").click(function(e){e.preventDefault(),$("#completed-lessons").toggleClass("hidden"),console.log("lessons revealed, buttons switched.")}),$("#toggle-upcoming-lessons").click(function(e){e.preventDefault(),$("#upcoming-lessons").toggleClass("hidden"),console.log("lessons revealed, buttons switched.")}),$("#toggle-available-lessons").click(function(e){e.preventDefault(),$("#available-lessons").toggleClass("hidden"),console.log("lessons revealed, buttons switched.")})};