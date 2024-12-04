"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBruce = void 0;
const tslib_1 = require("tslib");
const uuid = tslib_1.__importStar(require("uuid"));
const User_1 = require("../../../src/api/models/User");
class CreateBruce {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // const userFactory = factory<User, { role: string }>(User as any);
            // const adminUserFactory = userFactory({ role: 'admin' });
            // const bruce = await adminUserFactory.make();
            // console.log(bruce);
            // const bruce2 = await adminUserFactory.seed();
            // console.log(bruce2);
            // const bruce3 = await adminUserFactory
            //     .map(async (e: User) => {
            //         e.firstName = 'Bruce';
            //         return e;
            //     })
            //     .seed();
            // console.log(bruce3);
            // return bruce;
            // const connection = await factory.getConnection();
            const em = connection.createEntityManager();
            const user = new User_1.User();
            user.id = uuid.v1();
            user.firstName = 'Bruce';
            user.lastName = 'Wayne';
            user.email = 'bruce.wayne@wayne-enterprises.com';
            user.username = 'bruce';
            user.password = '1234';
            return yield em.save(user);
        });
    }
}
exports.CreateBruce = CreateBruce;
//# sourceMappingURL=CreateBruce.js.map