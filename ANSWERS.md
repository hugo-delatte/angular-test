# Angular Test

## Coding
### Comics service
- http client public
- comics service provided in root
- all functions are public
- type any on functions and no Observable
- correct the function getComicsWithHeroNames$()
```typescript
return this.getProduct().pipe(
    withLatestFrom(this.getComicsNamesToHeroNames()),
    map(([comics, comicsToHero]) => {
        return comics.map(item => ({...item, heroName: comicsToHero[item.title as string]}))
    }),
)
```
- think about what the hero name is not already given in comics
- The function Naming
- We could remove comment

### Comics model
- change the comics to be immutable
- challenge the fact that all properties are possibly undefined


### Comics store
#### In reducer
- add initialisation of boolean
- complete the `on` function
```typescript
return comicsAdapter.setAll(comics, state)
```
- has it understood the feature selector?

#### In Actions and effects
- Think about the error case 

## Product view
- get the comics correctly
- display simply the data in html


## Questions
- What is the purpose of stores? How would you implement a store (or a state manager) without NgRx?
- Explain in your own words what is the difference between Store and ComponentStore from Ngrx?
- What is the architecture you recommend for large and scalable project and why?
- what is your opinion about tests in front-end? Wich kind of test did you implement in your lasts projects

![technical](/assets/img/technical.png "technical")
![feature](/assets/img/feature.png "feature")

