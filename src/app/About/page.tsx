import React from 'react'
import Abouthero from "@/components/Abouthero"
import Aboutsection from "@/components/Aboutsection"
import Aboutpopular from  "@/components/Aboutpopular"

const page = () => {
    return (
      <div>
        <Abouthero />
            <Aboutsection />
            <Aboutpopular />
            
      </div>
    );
}

export default page