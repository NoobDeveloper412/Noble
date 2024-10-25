<script>
	import { Card } from '@atoms';
	const houseNeSrc = '/images/Chapter9/house-ne.png';

	import { elementInViewport, handleTriggerClasses } from '@utils';

	let triggerPoint, fromLeftClass, fromRightClass, fromTopClass, fromBottomClass;

	const getTriggerClasses = () => {
		fromLeftClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBlurredLeft',
			''
		);
		fromRightClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInBlurredRight',
			'animate-fadeOut'
		);
		fromTopClass = handleTriggerClasses(
			activeTrigger,
			nextTrigger,
			'animate-slideInTop',
			'animate-fadeOut'
		);
		fromBottomClass = handleTriggerClasses(activeTrigger, nextTrigger, 'animate-slideInBottom', '');
	};

	const setActiveTrigger = () => {
		activeTrigger = elementInViewport(triggerPoint);
		getTriggerClasses();
	};
</script>

<div class="chapter-item container flow-root sm:flex">
	<div
		class="image-container overflow-hidden absolute w-1/2 top-1/10 left-1/20 h-screen sm:w-full sm:left-0"
	>
		<!-- <img src={houseNeSrc} alt="" /> -->
	</div>
	<Card class="card dark last float-right sm:float-none">
		<h2 class="c-h2 mb-8">No</h2>
		<p>
			Dad refuses to be a Soviet spy and to sign a cooperation agreement. And so our whole family,
			except Aaron, who has already left - although we have a transit visa for Japan, although we
			have money for train tickets - have no right to leave the Soviet Union.
			<br /><br />
			Dad is taken away in an unknown direction, and Tolik, Mom and I stay in Vilnius. Then the Soviet
			government is replaced by the Nazi government, and we, having avoided the Łódź ghetto, enter the
			Vilnius Jewish ghetto instead.
		</p>
	</Card>
</div>
