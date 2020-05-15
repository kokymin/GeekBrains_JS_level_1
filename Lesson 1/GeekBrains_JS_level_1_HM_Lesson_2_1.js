// *** 2 УРОК. Урок 1. Основные операторы JavaScript
// ********************************************************
'use strict';

/* 1. */

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "Вы согласны." );
  }
  
  function showCancel() {
    alert( "Вы отменили выполнение." );
  }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
  ask("Вы согласны?", showOk, showCancel);