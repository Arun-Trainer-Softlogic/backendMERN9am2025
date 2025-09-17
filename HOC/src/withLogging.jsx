// hoc 



// hoc takes  a component and returnes a new one 
function withLogging (WrappedComponent){
  return function EnhancedComponent(props){
    // console.log(`[Log]: ${WrappedComponent.name} rendered with props` , props);

    return <WrappedComponent {...props} />    
  }
}


export default withLogging;
