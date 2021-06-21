/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "${_play_button1}", "click", function(sym, e) {
         // Sets a toggle to play or pause the audio track
         var audio = sym.$("wilde_cv_soundtrack")[0];
         if (audio.paused) {
         	audio.play();
         } else {
         	audio.pause();
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_play_button2}", "click", function(sym, e) {
         // Sets a toggle to play or pause the audio track
         var audio = sym.$("chilled_cv_soundtrack")[0];
         if (audio.paused) {
         	audio.play();
         } else {
         	audio.pause();
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_forward}", "mouseenter", function(sym, e) {
         sym.getSymbol('hover_over').stop('begin');
         var tyd = sym.getPosition()
         sym.play(tyd);
         sym.getSymbol('character_sym').play('begin');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_forward}", "mouseleave", function(sym, e) {
         sym.stop();
         sym.getSymbol('character_sym').stop('stance_right');
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_reverse}", "mouseenter", function(sym, e) {
         sym.getSymbol('hover_over').stop('begin');
         var tyd = sym.getPosition()
         sym.playReverse(tyd);
         sym.getSymbol('character_sym').play('links');
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_reverse}", "mouseleave", function(sym, e) {
         sym.stop();
         sym.getSymbol('character_sym').stop('stance_left');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left_back}", "mouseenter", function(sym, e) {
         sym.getSymbol('hover_over').stop('begin');
         var tyd = sym.getPosition()
         sym.playReverse(tyd);
         sym.getSymbol('character_sym').play('links');
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left_back}", "mouseleave", function(sym, e) {
         sym.stop();
         sym.getSymbol('character_sym').stop('stance_right');
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_right_back}", "mouseenter", function(sym, e) {
         sym.getSymbol('hover_over').stop('begin');
         var tyd = sym.getPosition()
         sym.play(tyd);
         sym.getSymbol('character_sym').play('begin');
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_right_back}", "mouseleave", function(sym, e) {
         sym.stop();
         sym.getSymbol('character_sym').stop('stance_right');
         
         
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         yepnope( { load: "http://www.edgehero.com/edgehero.js/0.2/edgehero-0.2-min.js" } );

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_menu2}", "mouseover", function(sym, e) {
         sym.getSymbol('menu2').play('einde');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menu2}", "mouseleave", function(sym, e) {
         sym.getSymbol('menu2').play('begin');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_close_icon}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.charlbest.com", "_self");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 132000, function(sym, e) {
         sym.getSymbol('menu2').play('einde');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_reverse}", "touchstart", function(sym, e) {
         sym.getSymbol('hover_over').stop('begin');
         var tyd = sym.getPosition()
         sym.playReverse(tyd);
         sym.getSymbol('character_sym').play('links');
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_reverse}", "touchend", function(sym, e) {
         sym.stop();
         sym.getSymbol('character_sym').stop('stance_left');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_forward}", "touchstart", function(sym, e) {
         sym.getSymbol('hover_over').stop('begin');
         var tyd = sym.getPosition()
         sym.play(tyd);
         sym.getSymbol('character_sym').play('begin');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_forward}", "touchend", function(sym, e) {
         sym.stop();
         sym.getSymbol('character_sym').stop('stance_right');
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_right_back}", "touchstart", function(sym, e) {
         sym.getSymbol('hover_over').stop('begin');
         var tyd = sym.getPosition()
         sym.play(tyd);
         sym.getSymbol('character_sym').play('begin');
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_right_back}", "touchend", function(sym, e) {
         sym.stop();
         sym.getSymbol('character_sym').stop('stance_right');
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left_back}", "touchstart", function(sym, e) {
         sym.getSymbol('hover_over').stop('begin');
         var tyd = sym.getPosition()
         sym.playReverse(tyd);
         sym.getSymbol('character_sym').play('links');
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left_back}", "touchend", function(sym, e) {
         sym.stop();
         sym.getSymbol('character_sym').stop('stance_right');
         
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'background'
   (function(symbolName) {   
   
      

   })("background");
   //Edge symbol end:'background'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play('begin');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_reverse}", "mouseenter", function(sym, e) {
         sym.play('begin');
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_reverse}", "mouseleave", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_forward}", "mouseenter", function(sym, e) {
         sym.play('begin');
         sym.stop();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_forward}", "mouseleave", function(sym, e) {
         sym.play();
         
         

      });
      //Edge binding end

   })("controls");
   //Edge symbol end:'controls'

   //=========================================================
   
   //Edge symbol: 'hover_over'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play('begin');

      });
      //Edge binding end

   })("hover_over");
   //Edge symbol end:'hover_over'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
   })("slide_1");
   //Edge symbol end:'slide_1'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6922, function(sym, e) {
         sym.getSymbol('Stage').Position = 5000
         
         

      });
      //Edge binding end

   })("slide_2");
   //Edge symbol end:'slide_2'

   //=========================================================
   
   //Edge symbol: 'flow_effect'
   (function(symbolName) {   
   
   })("flow_effect");
   //Edge symbol end:'flow_effect'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'man'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 867, function(sym, e) {
         sym.play('begin');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2367, function(sym, e) {
         sym.play('reverse');

      });
      //Edge binding end

   })("man");
   //Edge symbol end:'man'

   //=========================================================
   
   //Edge symbol: 'spin_slideshow_3d'
   (function(symbolName) {   
   
   })("spin_slideshow_3d");
   //Edge symbol end:'spin_slideshow_3d'

   //=========================================================
   
   //Edge symbol: 'Music'
   (function(symbolName) {   
   
   })("Music");
   //Edge symbol end:'Music'

   //=========================================================
   
   //Edge symbol: 'adobe_info'
   (function(symbolName) {   
   
   })("adobe_info");
   //Edge symbol end:'adobe_info'

   //=========================================================
   
   //Edge symbol: 'slide_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37965, function(sym, e) {
         sym.getComposition().getStage().play("set_char")
         sym.getComposition().getStage().stop("set_char")

      });
      //Edge binding end

   })("slide_4");
   //Edge symbol end:'slide_4'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'man'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 867, function(sym, e) {
         sym.play('begin');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1867, function(sym, e) {
         sym.play('links');

      });
      //Edge binding end

   })("man_1");
   //Edge symbol end:'man_1'

   //=========================================================
   
   //Edge symbol: 'adobe_stats_sym'
   (function(symbolName) {   
   
   })("adobe_stats_sym");
   //Edge symbol end:'adobe_stats_sym'

   //=========================================================
   
   //Edge symbol: 'pie_chart'
   (function(symbolName) {   
   
   })("pie_chart");
   //Edge symbol end:'pie_chart'

   //=========================================================
   
   //Edge symbol: 'slide_5'
   (function(symbolName) {   
   
   })("slide_5");
   //Edge symbol end:'slide_5'

   //=========================================================
   
   //Edge symbol: 'work_exp_sym'
   (function(symbolName) {   
   
   })("work_exp_sym");
   //Edge symbol end:'work_exp_sym'

   //=========================================================
   
   //Edge symbol: 'slide_6'
   (function(symbolName) {   
   
   })("slide_6");
   //Edge symbol end:'slide_6'

   //=========================================================
   
   //Edge symbol: 'slide_7'
   (function(symbolName) {   
   
   })("slide_7");
   //Edge symbol end:'slide_7'

   //=========================================================
   
   //Edge symbol: 'piechart_2'
   (function(symbolName) {   
   
   })("piechart_2");
   //Edge symbol end:'piechart_2'

   //=========================================================
   
   //Edge symbol: 'slide_8'
   (function(symbolName) {   
   
   })("slide_8");
   //Edge symbol end:'slide_8'

   //=========================================================
   
   //Edge symbol: 'projects_slide'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_websites_text}", "click", function(sym, e) {
         sym.play('websites');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_companies}", "click", function(sym, e) {
         sym.play('businesses');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_innovative}", "click", function(sym, e) {
         sym.play('facilitation');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_movie}", "click", function(sym, e) {
         sym.play('movies');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.play('begin');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3145, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3895, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4645, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5395, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text7}", "click", function(sym, e) {
         sym.play('websites');

      });
      //Edge binding end

   })("projects_slide");
   //Edge symbol end:'projects_slide'

   //=========================================================
   
   //Edge symbol: 'multi_color_pie_chart'
   (function(symbolName) {   
   
   })("multi_color_pie_chart");
   //Edge symbol end:'multi_color_pie_chart'

   //=========================================================
   
   //Edge symbol: 'menu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_end_menu}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("end")
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_things_i_love_menu}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("things_i_love")
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_projects_menu}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("projects")
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_work_exp_menu}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("work_exp")
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_achievements_menu}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("achievements")
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_skills_menu}", "click", function(sym, e) {
         sym.getComposition().getStage().play("skills")
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_academic_menu}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("academic")
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_me_menu}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("me")
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home_menu}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("home")
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menu_button}", "mouseover", function(sym, e) {
         sym.play('menu_play');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "mouseover", function(sym, e) {
         sym.play('menu_play');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menu_button}", "mouseenter", function(sym, e) {
         sym.play('menu_play');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "mouseenter", function(sym, e) {
         sym.play('menu_play');

      });
      //Edge binding end

   })("menu");
   //Edge symbol end:'menu'

   //=========================================================
   
   //Edge symbol: 'slide_9'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_face}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.facebook.com/charl.best", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_google}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://plus.google.com/+CharlBest/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_linkedin}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://za.linkedin.com/in/charlbest/", "_self");
         

      });
      //Edge binding end

   })("slide_9");
   //Edge symbol end:'slide_9'

})(jQuery, AdobeEdge, "EDGE-340225873");