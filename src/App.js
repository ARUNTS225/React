import Card from "./Card";

function App() {
  let data = [
    {
       plan:"Free",
       price:"0",
       users:"Single User",
       isusers:true,
       storage:"5GB Storage",
       isstorage:true,
       PublicProjects:"Unlimited Public Project",
       isPublicProjects:true,
       communicationAccess:"Community Access",
       iscommunicationAccess:true,
       privateProjects:"Unlimited Private Projects",
       isprivateProjects:false,
       phoneSupport:"Dedicated phone support",
       isphoneSupport:false,
       subdomain:"Free Subdomain",
       issubdomain:false,
       report:"Monthly Status Reports",
       isreport:false
    },
    {
      plan:"Plus",
      price:"9",
      users:"5 User",
      isusers:true,
      storage:"50GB Storage",
      isstorage:true,
      PublicProjects:"Unlimited Public Project",
      isPublicProjects:true,
      communicationAccess:"Community Access",
      iscommunicationAccess:true,
      privateProjects:"Unlimited Private Projects",
      isprivateProjects:true,
      phoneSupport:"Dedicated phone support",
      isphoneSupport:true,
      subdomain:"Free Subdomain",
      issubdomain:true,
      report:"Monthly Status Reports",
      isreport:false
    },
    {
      plan:"Pro",
      price:"49",
      users:"Unlimiteduser User",
       isusers:true,
       storage:"150GB Storage",
       isstorage:true,
       PublicProjects:"Unlimited Public Project",
       isPublicProjects:true,
       communicationAccess:"Community Access",
       iscommunicationAccess:true,
       privateProjects:"Unlimited Private Projects",
       isprivateProjects:true,
       phoneSupport:"Dedicated phone support",
       isphoneSupport:true,
       subdomain:"Unlimited Free Subdomain",
       issubdomain:true,
       report:"Monthly Status Reports",
       isreport:true
    }
  
  ]
  return <>
{/*<!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! -->*/}

<section className="pricing py-5">
  <div className="container">
    <div className="row">
   {/*} <Card data = {data[0]}/>
    <Card data = {data[1]}/>
<Card data = {data[2]}/>*/}
    {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
    }
       </div>
  </div>
</section>
  </>
}

export default App;
