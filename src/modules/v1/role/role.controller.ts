import { NextFunction, Request, Response } from 'express';
import { BadRequestResponse, SuccessResponse } from '../../../helpers/http';
import { Role } from '../../../models/tbl_role.model';
import { Op } from 'sequelize';
import { COMMON, ROLE } from '../../../helpers/message';

export class RoleController {

  public getAllRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roles = await Role.findAll();
      return SuccessResponse(res, COMMON.OK, roles);
    } catch (err) {
      next(err);
    }
  };

  public createRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const create_role = await Role.findOrCreate({
        where: {
          name: body.name,
        },
        defaults: body
      });
      if (create_role[1]) {
        return SuccessResponse(res, ROLE.ROLE_CREATED_SUCCESS);
      } else {
        return BadRequestResponse(res, ROLE.ROLE_ALREADY_EXIST);
      }
    } catch (err) {
      next(err);
    }
  };

  public updateRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const { id } = req.params;

      const role = await Role.findByPk(id);

      if (role) {
        const check_role = await Role.findOne({
          where: {
            name: body.name,
            id: { [Op.ne]: id }
          }
        });
        if (check_role) {
          return BadRequestResponse(res, ROLE.ROLE_ALREADY_EXIST);
        }

        await role.update(body);

        return SuccessResponse(res, ROLE.ROLE_UPDATED_SUCCESS);
      } else {
        return BadRequestResponse(res, ROLE.ROLE_NOT_FOUND);
      }
    } catch (err) {
      next(err);
    }
  };

  public deleteRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const role = await Role.findByPk(id);
      if (role) {
        await role.update({ status: 0 });
        return SuccessResponse(res, ROLE.ROLE_DELETED_SUCCESS);
      } else {
        return BadRequestResponse(res, ROLE.ROLE_NOT_FOUND);
      }
    } catch (err) {
      next(err);
    }
  };
}
