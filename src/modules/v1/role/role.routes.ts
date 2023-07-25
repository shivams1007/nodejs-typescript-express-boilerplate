import { Router } from 'express';
import { RoleController } from './role.controller';
import { roleSchema } from './role.schema';
import { bodyValidator } from '../../../middleware/validate.middleware';

export class RoleRoutes {
  router = Router();
  private roleCtrl: RoleController = new RoleController();
  constructor() {
    this.router.get('/', this.roleCtrl.getAllRole);

    this.router.post('/', [bodyValidator(roleSchema)], this.roleCtrl.createRole);

    this.router.put('/:id', [bodyValidator(roleSchema)], this.roleCtrl.updateRole);

    this.router.delete('/:id', this.roleCtrl.deleteRole);
  }
}
