# Individual Contribution
I was originally tasked with the following pages: 
- Home 
- Partners 
- Supporters 
- News (just 'News 'Page) 
- Header  

However, due to some time constraints, layout similarities and issues with website progression, I also ended up coding: 

- Canberra Modern (just 'Canberra Modern' page)  
- Footer 
- About 
- Links  

This assessment allowed me to understand how WordPress and other Content Management Sytems function. Utilizing Tailwind CSS as a framework also allowed me to gain knowledge about CSS frameworks and how they accelerate website development.  

Tailwind CSS further enhanced my knowledge on pseudo classes and how they can assist in certain situations. Tailwind's "Docs" pages were also really insightful and gave coherent descriptions about all their modifiers and CSS itself. 



In this code: 
``` 
<article class="tease odd:ml-auto odd:mr-[18rem] even:ml-[18rem] even:mr-auto p-[2rem] tease-{{post.type}} w-[40rem]" id="tease-{{post.id}}">  
 ```

I used the pseudo classes "`:odd`" and "`:eve`n" that are Tailwind modifiers for "`&:nth-child(odd)`" and "`&:nth-child(even)`" to alternate the building posts left and right.  

 

With this code: 
```
<li class="group w-37  { item.classes | join(' ') }}" >
          <a class="hover:text-yellow" target="{{ item.target }}" href="{{ item.link }}">{{ item.title }}

                  <div class="md:absolute md:invisible sm:visible group-hover:visible md:bg-black md:text-white rounded sm:bg-none
                              sm:text-black sm:m-auto sm:left-[20rem] sm:top md:left-auto md:top-auto sm:j sm:top-[10rem]"> 

                                  <div class="relative md:-left-4"> 
                                      {% include "menu.twig" with {'items': item.children} %} 
                                  </div>

                  </div> 
          </a>
</li>
```
 I used the "`group:hover:visible`" to target the parent element of the menu item children and applied "`group`" to the parent element. I also used media queries such as "`md:`" and "`sm:`" to target certain breakpoints of screen size. Unfortunately, we had other incomplete pages so I was not able to finish creating a hamburger menu, which is what I had originally intended to do.  

This experience has taught me to code with responsiveness in mind from the beginning of my projects as it is much easier to program responsive elements as you create the layout of the website. This also eliminates the need to decipher our code again. 



## Issue Resolution

One of the biggest issues I encountered was being unable to edit HTML elements directly because of the looping function of the site template. This made some of the website difficult to code, especially with Tailwind CSS, as we need access to the elements to implement the styling classes. To resolve this, we had to target them with pure CSS. 

The biggest challenge we encountered as a group was pushing and pulling each other's code to and from GitHub. We had a significant amount of conflicts within our code due to difference in coding experience, different coding styles and comprehension of the template files. These challenges were addressed with constant communication and reverting to previous working versions of our code by creating new branches on GitHub. On our last merge, we encountered thousands of corrupted files due to template file changes and decided that easiest way to code the rest of the site was to update from one device only.  

Unfortunately, parts of the website are incomplete and some of the pages were not made to be responsive for different screen sizes. The time I had allocated to improve site responsiveness was spent developing other components of our website. 


## Team Collaboration

In this group assessment, I was the project leader and took initiative with the design stage and the website coding. We collaboratively worked on the Figma high-fidelity prototype and discussed the visual theme for our website. I then created a new visual theme based off our discussions, asked for feedback and kept the group updated with any changes. Team collaboration was moderate as it was hard to discuss certain concepts and track progression without meeting up as frequently as preferred. In the beginning we were tasked with about 3-4 pages each but due to varying experiences with coding, I had to assume the responsibility for most pages on the website. 

## References and resources
Fathema Khanom. (n.d.). Facebook Icon [Online Image]. In freepik.com.      
    &nbsp; https://www.freepik.com/icon/facebook_3670032#fromView=keyword&page=2&position=76&uuid=677cf631-1a7c-4c19-b109-28f04e69a773 
  &nbsp;   &nbsp; Footer Facebook Icon 

Gann-Owens, R. (2022). A brick wall with plants growing on it [Online Image]. In Unsplash.
&nbsp; https://unsplash.com/photos/a-brick-wall-with-plants-growing-on-it-jzKk-d0qqcM
&nbsp; &nbsp; Homepage image banner 

Hight Quality Icons. (n.d.). Instagram Icon [Online Image]. In https://www.freepik.com/.                 
    https://www.freepik.com/icon/instagram_3670125
      &nbsp;   &nbsp; Footer Instagram Icon 

Installation: Tailwind CLI - Tailwind CSS. (n.d.). Tailwindcss.com.                                       
  &nbsp; https://tailwindcss.com/docs/installationTailwind CSS 
  &nbsp;   &nbsp; 
  Documentation Page 
