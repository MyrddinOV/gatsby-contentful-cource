import React from "react";
import { MostPopularLabel, PriceGroupWrapper, PriceOption, PriceOptionInner } from "./style";
import { RichText } from "../RichText";

export const PriceGroup = ({priceOptions}) => {
  console.log(priceOptions);
  return (
    <PriceGroupWrapper>
      {priceOptions.map(priceOption => (
        <PriceOption key={priceOption.id}>
          <PriceOptionInner isMostPopular={priceOption.mostPopular}>
            {!!priceOption.mostPopular && 
            <MostPopularLabel>Most popular</MostPopularLabel>
            }
            <h2>
              {priceOption.title}
            </h2>
            <h3>
              ${priceOption.amountPerMonth} / month
            </h3>
            <RichText raw={priceOption.description.raw}/>
          </PriceOptionInner>
        </PriceOption>
      ))}
    </PriceGroupWrapper>
  )
}