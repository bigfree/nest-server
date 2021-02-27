import { Injectable } from "@nestjs/common";
import { Prisma, User } from "../../../../prisma/generated";
import { PrismaService } from "../../prisma/services/prisma.service";

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {
	}

	/**
	 * Get one user
	 * @param {Prisma.UserWhereUniqueInput} userWhereUniqueInput
	 * @returns {Promise< | null>}
	 */
	async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
		return this.prisma.user.findUnique({
			where: userWhereUniqueInput
		});
	}

	/**
	 * Create user
	 * @param {Prisma.UserCreateInput} data
	 * @returns {Promise<>}
	 */
	async createUser(data: Prisma.UserCreateInput): Promise<User> {
		return this.prisma.user.create({ data });
	}
}