import { BookDatabase } from './../../typechain-types/BookDatabase';
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BookDatabaseModule = buildModule("BookDatabaseModule", (m) => {

  const bookDatabase = m.contract("BookDatabase")

  return { bookDatabase };
});

export default BookDatabaseModule;
