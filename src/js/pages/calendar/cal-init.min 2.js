!function(r){"use strict";function e(){this.$body=r("body"),this.$calendar=r("#calendar"),this.$event="#calendar-events div.calendar-events",this.$categoryForm=r("#add-new-event form"),this.$extEvents=r("#calendar-events"),this.$modal=r("#my-event"),this.$saveCategoryBtn=r(".save-category"),this.$calendarObj=null}e.prototype.onDrop=function(e,t){var n=e.data("eventObject"),a=e.attr("data-class"),i=r.extend({},n);i.start=t,a&&(i.className=[a]),this.$calendar.fullCalendar("renderEvent",i,!0),r("#drop-remove").is(":checked")&&e.remove()},e.prototype.enableDrag=function(){r(this.$event).each(function(){var e={title:r.trim(r(this).text())};r(this).data("eventObject",e),r(this).draggable({zIndex:999,revert:!0,revertDuration:0})})},e.prototype.init=function(){this.enableDrag();var e=new Date,t=(e.getDate(),e.getMonth(),e.getFullYear(),new Date(r.now())),n=[{title:"Meeting #3",start:new Date(r.now()+5068e5),className:"bg-info"},{title:"Submission #1",start:t,end:t,className:"bg-danger"},{title:"Meetup #6",start:new Date(r.now()+848e6),className:"bg-info"},{title:"Seminar #4",start:new Date(r.now()-1099e6),end:new Date(r.now()-919e6),className:"bg-warning"},{title:"Event Conf.",start:new Date(r.now()-1199e6),end:new Date(r.now()-1199e6),className:"bg-purple"},{title:"Meeting #5",start:new Date(r.now()-399e6),end:new Date(r.now()-219e6),className:"bg-info"},{title:"Submission #2",start:new Date(r.now()+868e6),className:"bg-danger"},{title:"Seminar #5",start:new Date(r.now()+348e6),className:"bg-success"}],a=this;a.$calendarObj=a.$calendar.fullCalendar({slotDuration:"00:15:00",minTime:"08:00:00",maxTime:"19:00:00",defaultView:"month",handleWindowResize:!0,header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay"},events:n,editable:!0,droppable:!0,eventLimit:!0,selectable:!0,drop:function(e){a.onDrop(r(this),e)},select:function(e,t,n){a.onSelect(e,t,n)},eventClick:function(e,t,n){a.onEventClick(e,t,n)}})},r.CalendarApp=new e,r.CalendarApp.Constructor=e}(window.jQuery),$(window).on("load",function(){$.CalendarApp.init()});