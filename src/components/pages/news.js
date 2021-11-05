import React from "react";

import './news.css';

const NewsPage = () => {
    return(
        <div className=" alert alert-primary position-relative">
            <h2 className="display-4"> Breaking News!!!</h2>
            <h2 className="display-6"> More news from news</h2>
           <p className="p">
                Use s to create actionable list group items with hover, disabled, 
               and active states by adding .list-group-item-action. We separate these pseudo-classes t
               o ensure list groups made of non-interactive elementdon’t provide a click or tap affordance.
               Be sure to not use the standard .btn classes here.
               Use s to create actionable list group items with hover, disabled, 
               and active states by adding .list-group-item-action. We separate these pseudo-classes t
               o ensure list groups made of non-interactive elementdon’t provide a click or tap affordance.
               Be sure to not use the standard .btn classes here.
               Use s to create actionable list group items with hover, disabled, 
               and active states by adding .list-group-item-action. We separate these pseudo-classes t
               o ensure list groups made of non-interactive elementdon’t provide a click or tap affordance.
               Be sure to not use the standard .btn classes here.
           </p>
           <button type="button" className="btn btn-primary btn btn-outline-danger ">Hello World!</button>
        </div>
        
        
    );
};

export default NewsPage;