import './App.css';
import Card from './comp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const data=[
    {
      plan:'free',
      price:'0',
      month:'1',
      features:[
        {
          title:'single user',
          isEnable:true
        },
        {
          title:'5gb storage',
          isEnable:true
        },
        {
          title:'unlimited public projects',
          isEnable:true
        },
        {
          title:'Community Access',
          isEnable:true
        },
        {
          title:'Unlimited Private Projects',
          isEnable:false
        },
        {
          title:'Dedicated Phone Support',
          isEnable:false
        },
        {
          title:'Free Subdomain',
          isEnable:false
        },
        {
          title:'Monthly Status Reports',
          isEnable:false
        }
        
      ]
    },
    {
      plan:'paid',
      price:'20',
      month:'1',
      features:[
        {
          title:'5 user',
          isEnable:true
        },
        {
          title:'50gb storage',
          isEnable:true
        },
        {
          title:'unlimited public projects',
          isEnable:true
        },
        {
          title:'Community Access',
          isEnable:true
        },
        {
          title:'Unlimited Private Projects',
          isEnable:true
        },
        {
          title:'Dedicated Phone Support',
          isEnable:true
        },
        {
          title:'Free Subdomain',
          isEnable:true
        },
        {
          title:'Monthly Status Reports',
          isEnable:false
        },
        
      ]
      },
      {
        plan:'pro',
        price:'49',
        month:'5',
        features:[
          {
            title:'Unlimited user',
            isEnable:true
          },
          {
            title:'150gb storage',
            isEnable:true
          },
          {
            title:'unlimited public projects',
            isEnable:true
          },
          {
            title:'Community Access',
            isEnable:true
          },
          {
            title:'Unlimited Private Projects',
            isEnable:true
          },
          {
            title:'Dedicated Phone Support',
            isEnable:true
          },
          {
            title:'Free Subdomain',
            isEnable:true
          },
          {
            title:'Monthly Status Reports',
            isEnable:true
          },
          
        ]
      },
      {
        plan:'paid',
        price:'20',
        month:'1',
        features:[
          {
            title:'5 user',
            isEnable:true
          },
          {
            title:'50gb storage',
            isEnable:true
          },
          {
            title:'unlimited public projects',
            isEnable:true
          },
          {
            title:'Community Access',
            isEnable:true
          },
          {
            title:'Unlimited Private Projects',
            isEnable:true
          },
          {
            title:'Dedicated Phone Support',
            isEnable:true
          },
          {
            title:'Free Subdomain',
            isEnable:true
          },
          {
            title:'Monthly Status Reports',
            isEnable:false
          },
          
          
        ]
        },
        {
          plan:'paid',
          price:'20',
          month:'1',
          features:[
            {
              title:'5 user',
              isEnable:true
            },
            {
              title:'50gb storage',
              isEnable:true
            },
            {
              title:'unlimited public projects',
              isEnable:true
            },
            {
              title:'Community Access',
              isEnable:true
            },
            {
              title:'Unlimited Private Projects',
              isEnable:true
            },
            {
              title:'Dedicated Phone Support',
              isEnable:true
            },
            {
              title:'Free Subdomain',
              isEnable:true
            },
            {
              title:'Monthly Status Reports',
              isEnable:false
            },
            
            
          ]
          },
          {
            plan:'paid',
            price:'20',
            month:'1',
            features:[
              {
                title:'5 user',
                isEnable:true
              },
              {
                title:'50gb storage',
                isEnable:true
              },
              {
                title:'unlimited public projects',
                isEnable:true
              },
              {
                title:'Community Access',
                isEnable:true
              },
              {
                title:'Unlimited Private Projects',
                isEnable:true
              },
              {
                title:'Dedicated Phone Support',
                isEnable:true
              },
              {
                title:'Free Subdomain',
                isEnable:true
              },
              {
                title:'Monthly Status Reports',
                isEnable:false
              },
              
              
            ]
            }

    ]

  return (
<section className="pricing py-5">
   <div className="container">
      <div className="row">
        {

          data.map((item)=>{
            return(
              <Card item={item}></Card>
            )
          })
        }
        
        
        
        
        
      </div>
    </div> 
</section>
  );
}

export default App;
