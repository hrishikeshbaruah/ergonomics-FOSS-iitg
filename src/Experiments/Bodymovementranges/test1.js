var f = function(){

    function Draggable(element){
        this.element = element;
        //this.dragStart = dragStart;
        //this.dragDrop = dragDrop;

        this.element.classList.add('draggable');
        var self = this;

        var move = function(event){
           
           //don't bubble this event - mousedown
            event.stopPropagation();
            //prevent any default action
            event.preventDefault();

            var originalLeft = parseInt(window.getComputedStyle(this).left);
            var originalTop = parseInt(window.getComputedStyle(this).top);

            var mouseDownX = event.clientX;
            var mouseDownY = event.clientY;

            function dragMe(event){
                self.element.style.left = originalLeft + event.clientX - mouseDownX + "px";
                self.element.style.top = originalTop + event.clientY - mouseDownY + "px";
                event.stopPropagation();
            }

            function dropMe(event){
                document.removeEventListener('mousemove',dragMe,true);
                document.removeEventListener('mouseup',dropMe,true);
                event.stopPropagation();
            }

            document.addEventListener('mouseup',dropMe,true);
            document.addEventListener('mousemove',dragMe,true);

        };

        this.element.addEventListener('mousedown',move,false);

    }

    




    var imageElement1 = document.getElementsByTagName('img')[0];
    //var imageElement2 = document.getElementsByTagName('img')[2];
   // var imageElement3 = document.getElementsByTagName('img')[4];
	//var imageElement4 = document.getElementsByTagName('img')[6];
	//var imageElement5 = document.getElementsByTagName('img')[8];
	
    var dragObject1 = new Draggable(imageElement1);
    //var dragObject2 = new Draggable(imageElement2);
   // var dragObject3 = new Draggable(imageElement3);
	//var dragObject4 = new Draggable(imageElement4);
	//var dragObject5 = new Draggable(imageElement5);

};

window.addEventListener('load',f,false);