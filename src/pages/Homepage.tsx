import React from "react";
import { PageLayout } from "../components/PageLayout";
import hivTestImage from "../assets/images/hiv-test.jpg";

const byline = [
  {
    name: "Jack Walker/NYCity News Service",
    url: "https://jackwalker.xyz/",
  },
];

export const Homepage = () => (
  <PageLayout>
    <div>
      <div className="container">
        <h1 className="headline">HIV prevention cuts could worsen health outcomes in East New York, experts warn</h1>
        <div className="attribution">
          <p className="byline">
            By{" "}
            {byline.map((author, i) => (
              <span key={i} className="author">
                <a href={author.url}>{author.name}</a>
                {i < byline.length - 2
                  ? ", "
                  : i < byline.length - 1
                  ? " and "
                  : ""}
              </span>
            ))}
          </p>
          <p className="byline">December 17, 2025</p>
        </div>
      </div>

      <div className="photo-container">
        <figure className="photo">
          <img src={hivTestImage} alt="A blue-and-white box that reads 'HIV self-test' sits atop a white surface." />
          <figcaption>
            An HIV self-test. <em>Jack Walker/NYCity News Service</em>
          </figcaption>
        </figure>
      </div>

      <br />

      <div className="container">
        <p className="copy" style={{ fontStyle: 'italic' }}>
          Editor's Note: This is not an actual article published by THE CITY. This is an article written by journalism student Jack Walker, which he inserted into this news page template to practice coding.
        </p>
        <p className="copy">
          Sarah Braunstein once saw federal funding for local health initiatives as a given. As assistant commissioner of the Bureau of Hepatitis, HIV and STI, she knew cities like New York have relied on federal support to address public health crises like the AIDS epidemic. Then came the news Congress was considering cuts to HIV resources by <a href="https://appropriations.house.gov/sites/evo-subsites/republicans-appropriations.house.gov/files/evo-media-document/fy26-labor-health-and-human-services-education-and-related-agencies-subcommittee-mark.pdf">more than $1.7 billion</a> nationally.
        </p>
        <p className="copy">
          "We are worried that we will see less access to HIV testing, treatment and prevention," Braunstein said. "Fewer people will know their HIV status. There may be increased HIV transmission and, ultimately, more HIV and AIDS-related deaths."
        </p>
        <p className="copy">
          Braunstein said roughly 88% of the city's funding for HIV prevention comes from the federal government, primarily through the Centers for Disease Control and Prevention. But congressional budget cuts cast these dollars in doubt, prompting concern for neighborhoods where the risk of HIV transmission is highest.
        </p>
        <p className="copy">
          Among them is East New York, where last year 1 in 50 residents was living with HIV, according to the New York City Department of Health and Mental Hygiene. The rate of new HIV infections last year was 29% higher in East New York than Brooklyn on average.
        </p>
        <p className="copy">
          HIV rates are higher in lower-income areas and the Black and Latino communities, <a href="https://www.cdc.gov/hiv/data-research/facts-stats/race-ethnicity.html">which researchers attribute</a> to long-standing health care inequities around income and race.
        </p>
        <p className="copy">
          "We know very clearly, not just in HIV but across public health areas, that poor access to health care doesn't affect populations evenly," Braunstein said. "There's an unfair distribution of those negative impacts across any community or set of communities, including in New York City."
        </p>
        <p className="copy">
          Last year, East New York's median income was <a href="https://furmancenter.org/neighborhoods/view/east-new-york-starrett-city">one-third lower</a> than the citywide median, according to the Furman Center for Real Estate and Urban Policy at New York University. While 45% of the neighborhood's residents identify as Black, Black people made up 61% of its residents living with HIV, according to the city health department.
        </p>
        <p className="copy">
          These are "racial and ethnic inequities that we are very concerned about," Braunstein said.
        </p>
        <p className="copy">
          Juan Colon, who serves as a member of the East New York-based Brooklyn Community Board 5, said residents already struggle to stay informed on health care resources and information. He said changes to HIV prevention would create confusion over where and how to get tested.
        </p>
        <p className="copy">
          "East New York is already kind of a medical desert when it comes to the health care system," he said. "Funding being cut, it's going to just exacerbate that even more."
        </p>
        <p className="copy">
          Across New York state, health officials are bracing for HIV prevention cuts totaling <a href="https://www.hivma.org/news/news_and_publications/hivma_news_releases/2025/house-funding-bill-would-put-america-at-risk-for-an-hiv-crisis/">hundreds of millions</a> of dollars. A House budget bill would eliminate the CDC HIV Prevention Program, which would mean $41 million in cuts for New York.
        </p>
        <p className="copy">
          The House has also suggested cuts to the Ending the HIV Epidemic initiative by $200 million and the Ryan White HIV/AIDS Program <a href="https://www.hopkinsmedicine.org/news/newsroom/news-releases/2025/09/ending-federally-funded-ryan-white-hivaids-program-would-increase-new-hiv-infections-49-nationwide-by-2030-computer-model-predicts">by $525 million</a>. Both programs operate nationally, including in New York.
        </p>
        <p className="copy">
          Programs like these make up a broad category of health care called HIV prevention, which researchers consider distinct from categories like treatment that come after transmission.
        </p>
        <p className="copy">
          The goal of HIV prevention is to block the disease's spread. Approaches include regular testing, community education, condom distribution and prescribing antiretroviral medications that block transmission, according to Christian Grov, a professor and researcher at the CUNY School of Public Health.
        </p>
        <p className="copy">
          "The most important thing is that you know your HIV status. HIV testing is a gateway, either into treatment or prevention," Grov said. "If a person comes in for HIV testing and they're negative, they could go down one panel of things: 'Okay, you're negative. What can we do to help keep you negative?'"
        </p>
        <p className="copy">
          Alternatively, for those who test positive, HIV testing fast-tracks access to medical care and treatment resources, Grov said.
        </p>
        <p className="copy">
          For communities like East New York where health care inequities persist, Grov said health research is especially important to ensure resources are distributed in effective and meaningful ways. The best approach varies across communities, he said.
        </p>
        <p className="copy">
          But ongoing talk of cutting HIV prevention funds is coinciding with <a href="https://www.nytimes.com/interactive/2025/12/02/upshot/trump-science-funding-cuts.html">massive federal cuts</a> to research funding, especially around LGBTQ health care. Grov finds that particularly concerning.
        </p>
        <p className="copy">
          "In order to do research on a disparity, you have to work with the populations that are affected by it," he said. "Saying we need to do work with Black and brown populations is being perceived as DEI research and therefore not being supported or funded."
        </p>
        <p className="copy">
          During the COVID-19 pandemic, Colon said his community saw how health inequities bore consequences for public health in times of crisis. He worries over what might happen if HIV cases continue to rise. In 2024, the city reported an <a href="https://www.nyc.gov/site/doh/about/press/pr2025/nyc-health-department-releases-2024-hiv-surveillance-data.page">increase in cases</a> for the <a href="https://www.nyc.gov/site/doh/about/press/pr2024/health-department-releases-2023-hiv-surveillance-data.page">second year in a row</a>.
        </p>
        <p className="copy">
          "Here we are again," Colon said. "Things just get shut down, and people are going to die."
        </p>
      </div>
    </div>
  </PageLayout>
);
