 //hoC takes a component and returnes a new one 


function  withloggin(wrappedComponent){
return function enhancedComponent(props){
    console.log(`[log]: ${wrappedComponent.name} rendered with props `, props);
    return <wrappedComponent {...props} />;
    
}
}

export default withloggin;