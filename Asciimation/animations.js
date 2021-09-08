var BLANK = "";

var CUSTOM = "";   // you could change the value of this variable in your code

var EXERCISE = "  o\n" +
    " /#\\\n" +
    " _|_\n" +
    "=====\n" +
    " \\o/\n" +
    "  #\n" +
    "_/ \\_\n";

var JUGGLER = "   o\n" +
    "   O\n" +
    " o/|\\o\n" +
    "  / \\\n" +
    "=====\n" +
    "    o\n" +
    " o_O\n" +
    "   |o\n" +
    "  / \\\n" +
    "=====\n" +
    " o   o\n" +
    "  \\O\n" +
    "   o\\\n" +
    "  / \\\n" +
    "=====\n" +
    "  o\n" +
    "  _O_o\n" +
    "  o|\n" +
    "  / \\\n";

var BIKE = "\n" +
    "   _o\n" +
    " _< \\\\_\n" +
    "(_)>(_)            .\n" +
    "=====\n" +
    "\n" +
    "     _o\n" +
    "   _< \\\\_\n" +
    "  (_)>(_)          .\n" +
    "=====\n" +
    "\n" +
    "       _o\n" +
    "     _< \\\\_\n" +
    "    (_)>(_)        .\n" +
    "=====\n" +
    "          o\n" +
    "         /\\\\_\n" +
    "       _< (_)\n" +
    "      (_)          .\n" +
    "=====\n" +
    "            o\n" +
    "           /\\\\_\n" +
    "         _< (_)\n" +
    "        (_)        .\n" +
    "=====\n" +
    "             _\n" +
    "           _ \\\\\\\\o\n" +
    "          (_)/<_\n" +
    "              (_)  .\n" +
    "\n" +
    "=====\n" +
    "               _\n" +
    "             _ \\\\\\\\o\n" +
    "            (_)/<_\n" +
    "                (_).\n" +
    "=====\n" +
    "                  _\n" +
    "                 (_)\\\\__/o\n" +
    "                   \\\\_| \\\\\n" +
    "                  .(_)\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\' \\\\/\n" +
    "                  .  (_)\'  _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'  \\\\/\n" +
    "                  .  (_)\'   _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'   \\\\/\n" +
    "                  .  (_)\'    _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\_o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__ o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__  o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__   o\n";

var DIVE = "  o\n" +
    " /|\\\n" +
    ",/ \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "..,..,,.,...,,|.,|..,.,,...,..,,,..,..,..,.,\n" +
    "=====\n" +
    "     o\n" +
    "    -|-\n" +
    "    / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "      \\o/\n" +
    "       |\n" +
    "      / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "        \\o/\n" +
    "        /\n" +
    "       / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "            |o__\n" +
    "            /\n" +
    "          /\\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
    "=====\n" +
    "              o/__\n" +
    "           __/\n" +
    "             \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
    "=====\n" +
    "\n" +
    "                  __ o__\n" +
    "                 /)  \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "...,,,...,.,.,|..|.,.,...,,,.,..,.,.,,,..,..\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "                           \\)\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/    \\\n" +
    "-|----------|-|--|-|--\'    /o\\\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "....,...,...,,|,,|,.,.,.,.,.,.,.,....,,,,,..\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |           \\|\n" +
    "              |  |            \\o\n" +
    "              |  |            ( \\\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,....,,...|.,|.,.,.,.,.,.,.,.,.,.,.,.,,,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                \\)\n" +
    "              |  |                |\n" +
    "              |  |               /o\\\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,,,...,.,,,,,|.,|.,,,.,.,,.,..,.,,....,,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                 \\ /\n" +
    "              |  |                  |\n" +
    "              |  |                 /o\\\n" +
    ",..,.,..,,.,.,|,,|.,,,.,,.,,.,...,,..,,.,..,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,\\|.,..,.\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                `.\' \'.\n" +
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,`\'.,..,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n";


// can also access the animations as an associative array / hash map,
// such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"]
var ANIMATIONS = [];
ANIMATIONS.Blank = ANIMATIONS.blank = ANIMATIONS.BLANK = BLANK;
ANIMATIONS.Custom = ANIMATIONS.custom = ANIMATIONS.CUSTOM = CUSTOM;   // you could change the value of this in your code
ANIMATIONS.Exercise = ANIMATIONS.exercise = ANIMATIONS.EXERCISE = EXERCISE;
ANIMATIONS.Juggler = ANIMATIONS.juggler = ANIMATIONS.JUGGLER = JUGGLER;
ANIMATIONS.Bike = ANIMATIONS.bike = ANIMATIONS.BIKE = BIKE;
ANIMATIONS.Dive = ANIMATIONS.dive = ANIMATIONS.DIVE = DIVE;