class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.01,
            length:10
        }

        this.pointB=pointB;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA=null;
    }

    launch(bodyA){
        this.launch.bodyA=bodyA;

    }

    display(){
        
    }
}