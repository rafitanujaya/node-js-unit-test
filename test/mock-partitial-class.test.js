import { UserRepository } from "../src/user-repository"
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository)
test('test mock class method findById', () => {
    const user = {id: 1 , name: 'rafi'}
    const findById = jest.spyOn(repository, 'findById');
    findById.mockReturnValue(user);

    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled()
})
