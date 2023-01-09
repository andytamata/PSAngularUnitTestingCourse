import { of } from "rxjs";
import { HeroesComponent } from "../heroes/heroes.component"

describe('HeroesComponent', () => {
    let component: HeroesComponent
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'Spider Dude', strength: 8},
            {id: 2, name: 'Wonderful Woman', strength: 24},
            {id: 1, name: 'Super Male', strength: 58},
        ]

        component = new HeroesComponent(mockHeroService);
    })

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    describe('delete', () => {
        it('should remove indicated hero from hero list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        })

        it('should call deleteHero with correct value', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
            
        })
    })


})