AFRAME.registerComponent("box1" ,{
    schema:{
        boxprop:{
            type:'number',default:0
        }
    },
    tick:function (){
        this.data.boxprop=this.data.boxprop+0.01;
        var p=this.el.getAttribute("position");
        p.y=this.data.boxprop
        p.x=this.data.boxprop
        this.el.setAttribute("position",{
            x:p.x,y:p.y,z:p.z
        })
    }
})
