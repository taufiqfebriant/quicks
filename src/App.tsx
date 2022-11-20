import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';

const options = ['inbox', 'task'] as const;
type Option = typeof options[number];

const icons = ['lightning', 'question-answer', 'chrome-reader-mode'] as const;
type Icon = typeof icons[number];

type OptionInfo = {
	icon: Icon;
	iconColor: string;
	activeBackgroundColor: string;
};

const optionInfo: Record<Option, OptionInfo> = {
	task: {
		icon: 'chrome-reader-mode',
		iconColor: '#F8B76B',
		activeBackgroundColor: '#F8B76B'
	},
	inbox: {
		icon: 'question-answer',
		iconColor: '#8885FF',
		activeBackgroundColor: '#8785FF'
	}
};

interface IconProps extends ComponentPropsWithoutRef<'svg'> {
	id: Icon;
}

const Icon = (props: IconProps) => {
	const { id, ...restProps } = props;

	return (
		<svg {...restProps}>
			<use href={`/images/sprite.svg#icon-${id}`} />
		</svg>
	);
};

function App() {
	const [selectedOption, setSelectedOption] = useState<Option | null>(null);

	useEffect(() => {
		document.body.classList.add('bg-[#333333]', 'text-[#F2F2F2]');
	}, []);

	const filteredOptions = selectedOption
		? options.filter(option => option !== selectedOption)
		: options;

	return (
		<div className="flex h-screen divide-x divide-[#F2F2F2]">
			<div className="w-[17.8125rem]" />

			<div className="relative h-full flex-1">
				<header className="bg-[#4F4F4F] pt-[1.1875rem] pb-[1.4375rem] pl-[1.625rem]"></header>

				<Listbox
					value={selectedOption}
					onChange={setSelectedOption}
					horizontal
					as="div"
					className="fixed bottom-[1.6875rem] right-[2.125rem] flex flex-row-reverse items-center gap-x-[1.625rem]"
				>
					<Listbox.Button
						className="z-20 flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full text-white"
						style={{
							backgroundColor: selectedOption
								? optionInfo[selectedOption].activeBackgroundColor
								: '#2F80ED'
						}}
					>
						<Icon
							id={selectedOption ? optionInfo[selectedOption].icon : 'lightning'}
							fill="currentColor"
							className={clsx(
								{ 'h-[25.19px]': selectedOption === 'inbox' },
								{ 'h-[18.89px]': selectedOption === 'task' },
								{ 'h-8': !selectedOption }
							)}
						/>
					</Listbox.Button>

					{selectedOption ? (
						<button
							type="button"
							onClick={() => setSelectedOption(null)}
							className="absolute right-[15px] z-10 h-[4.25rem] w-[4.25rem] rounded-full bg-[#4F4F4F]"
						/>
					) : null}

					<Listbox.Options
						className="flex flex-row-reverse gap-x-[1.625rem]"
						static={selectedOption ? true : false}
					>
						{filteredOptions.map(option => (
							<div key={option} className="relative">
								{!selectedOption ? (
									<span
										className={clsx(
											'absolute left-1/2 translate-y-1/2 -translate-x-1/2 capitalize text-white',
											{ '-top-[41.88px]': option === 'inbox' },
											{ '-top-[43.87px]': option === 'task' }
										)}
									>
										{option}
									</span>
								) : null}

								<Listbox.Option
									value={option}
									className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-[#F2F2F2]"
									style={{ color: optionInfo[option].iconColor }}
								>
									<Icon
										id={optionInfo[option].icon}
										fill="currentColor"
										className={clsx(
											{ 'h-[22.22px]': option === 'inbox' },
											{ 'h-[18.89px]': option === 'task' }
										)}
									/>
								</Listbox.Option>
							</div>
						))}
					</Listbox.Options>
				</Listbox>
			</div>
		</div>
	);
}

export default App;
