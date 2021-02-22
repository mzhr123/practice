export const GropupReducer =(State=GroupDefaultState,Action)=>{
switch(Action.type){
    case"ADD-NEW-GROUP":
    return{...State,Group:[...State.Group,Action.Group]};
    default:
        return State;
}
};

const GroupDefaultState={
    Groups:[
        {name:"mazhar",
        mobile:9652852828,
        designation:"employee"},

        {name:"rehan",
        mobile:7020387137,
        designation:"worker"},

        {name:"rabe",
        mobile:9454727888,
        designation:"manager"},

        {name:"aadil",
        mobile:7789456121,
        designation:"director"},

        {name:"rizwan",
        mobile:123456789,
        designation:"hr"},

        {name:"mohammad",
        mobile:4567891233,
        designation:"group leader"},
    ],
};