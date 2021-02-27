import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "../../prisma/generated";
import { USER_NOT_EXIST } from "../exception/exception-message";
import { UsersService } from "../modules/users/services/users.service";

@Injectable()
export class UserByIdPipe {
	constructor(private readonly userService: UsersService) {
	}

	async transform(value: string) {
		const user: User | null = await this.userService.user({ id: String(value) });

		if (null === user) {
			throw new BadRequestException([USER_NOT_EXIST]);
		}
		return value;
	}
}