Aloha.ready(function () {  

    function removeClassListItem(...ulClasses) {
        ulClasses.forEach(ulClass => {
            $(ulClass).each(function() {
                $(this).find("li.ui-menu-item").removeClass("ui-menu-item");
            });
        });
    }
    
    $(document).on('click', '.aloha-ui-menubutton-expand:eq(1)', function() {
        removeClassListItem("ul.aloha-list-disc", "ul.aloha-list-circle", "ul.aloha-list-square");
    });

    $('#content').on('click', function() {
        setTimeout(function() {
            $("div.ui-controlgroup.ui-controlgroup-horizontal.ui-helper-clearfix").each(function(){
            $(this).addClass("ui-buttonset");
            })
        }, 100);
    });
      
  })
