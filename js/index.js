$(function() {
	/*选择活动日期，弹出日历选择框*/
	$( "#dateBegin" ).datepicker();
	$( "#dateEnd" ).datepicker();

	/*为活动流程文本编辑框的工具栏添加背景*/
	var editToolPic = ["align_center","align_left","align_right","align_center2","bold","italic","underline","strikethrough","font_color","font_background","Ix"];
	var editTool = $(".editTool>li:eq(2)>div");
	for( var i = 0; i <= editTool.length;i++ ) {
		$(editTool[i]).css({
			"background":"url(image/" + editToolPic[i] + ".png)",
			"background-size":"cover"
		});
	};

	/*设置一个按钮的边距*/
	$(".eventsProcedure>div:last-child").css("margin-left","230px");

	/*主页左侧导航栏点击切换右侧不同的内容*/
	var navList = $(".nav > ul > li");
	var navListContent = ["list","editEvents","stuComment","websiteStyle"];
	for(var j = 0; j < navList.length; j++) {
		$(navList[j]).on("click",function() {
			console.log(j);
			for(var i = 0; i < navListContent.length; i++) {
				$("#editMessage").addClass("content_display");
				$("#" + navListContent[i]).addClass("content_display");
			};
			$("#" + navListContent[$(navList).index($(this))]).removeClass("content_display");
			for(var k = 0; k < navList.length; k++) {
				$(navList[k]).removeClass("active");
			};
			$(this).addClass("active");
		});
	};

	/*更新导师信息页面的添加按钮，点击跳出编辑页面*/
	$("#addList").on("click",function() {
		$("#list").addClass("content_display");
		$("#editMessage").removeClass("content_display");
	});
	/*导师信息预览模态框*//*活动信息预览模态框*/	
	var messagePreOverlay = $("#messagePre-overlay");
	var eventsPreOverlay = $("#eventsPre-overlay");
	$("#messagePreview").on("click",function() {
		messagePreOverlay.toggle();
	});
	$("#msgPreClose").on("click",function() {
		messagePreOverlay.toggle();
	});
	$(".editEventsBtn:eq(0)").on("click",function() {
		eventsPreOverlay.toggle();
	});
	$("#eventsPreBtn").on("click",function() {
		eventsPreOverlay.toggle();
	});
/*$("#a1").on("click",function() {
	var e1 = document.getElementById('modal-overlay');			
    e1.style.visibility =  (e1.style.visibility == "visible"  ) ? "hidden" : "visible";
    console.log("click");
});
$("#a2").on("click",function() {
	var e1 = document.getElementById('modal-overlay');			
    e1.style.visibility =  (e1.style.visibility == "visible"  ) ? "hidden" : "visible";
    console.log("click");
});*/
});